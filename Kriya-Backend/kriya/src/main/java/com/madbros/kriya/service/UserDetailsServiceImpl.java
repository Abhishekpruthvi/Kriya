package com.madbros.kriya.service;

import com.madbros.kriya.enums.RoleEnum;
import com.madbros.kriya.exception.BaseServiceException;
import com.madbros.kriya.exception.ErrorCodes;
import com.madbros.kriya.model.UserDetails;
import com.madbros.kriya.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Override
    public UserDetails saveUser(UserDetails user) {
        UserDetails currentUser = userRepository.findByUserName(user.getUserName());
        if(currentUser!=null)
            throw new BaseServiceException(ErrorCodes.Exception_Codes.USER_NAME_ALREADY_EXISTS,user.getUserName());
        return userRepository.save(user);
    }

    @Override
    public UserDetails findByUserNameAndPassword(String name, String password) {
        UserDetails user = userRepository.findByUserNameAndPassword(name, password);
        if(user==null)
            throw new BaseServiceException(ErrorCodes.Exception_Codes.USER_NAME_PASSWORD_WRONG);
        return user;
    }

    @Override
    public List<UserDetails> getAllStudents() {
        return userRepository.findAllByRole(RoleEnum.ROLE_STUDENT);
    }

    @Override
    public List<UserDetails> getAllMentors() {
        return userRepository.findAllByRole(RoleEnum.ROLE_MENTOR);
    }


}
