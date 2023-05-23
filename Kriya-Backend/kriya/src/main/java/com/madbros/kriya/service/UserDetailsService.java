package com.madbros.kriya.service;

import com.madbros.kriya.model.UserDetails;

import java.util.List;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */
public interface UserDetailsService {
     UserDetails saveUser(UserDetails user);
     UserDetails findByUserNameAndPassword(String name, String password);

     List<UserDetails> getAllStudents();

     List<UserDetails> getAllMentors();
}
