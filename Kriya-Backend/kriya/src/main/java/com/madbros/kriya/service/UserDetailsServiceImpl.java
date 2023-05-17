package com.madbros.kriya.service;

import com.madbros.kriya.model.UserDetails;
import com.madbros.kriya.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return userRepository.save(user);
    }

    @Override
    public UserDetails findByUserNameAndPassword(String name, String password) {
        UserDetails user = userRepository.findByUserNameAndPassword(name, password);
        return user;
    }
}
