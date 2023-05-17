package com.madbros.kriya.service;

import com.madbros.kriya.model.UserDetails;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */
public interface UserDetailsService {
     UserDetails saveUser(UserDetails user);
     UserDetails findByUserNameAndPassword(String name, String password);
}
