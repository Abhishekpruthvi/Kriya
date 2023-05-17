package com.madbros.kriya.service;

import com.madbros.kriya.model.UserDetails;

import java.util.Map;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */
public interface JwtGenerator {

    String generateToken(UserDetails userDetails);
}
