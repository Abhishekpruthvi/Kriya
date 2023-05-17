package com.madbros.kriya.service;

import com.madbros.kriya.model.UserDetails;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */

@Service
public class JwtGeneratorImpl implements JwtGenerator {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration.ms}")
    private int jwtExpirationMs;

    @Override
    public String generateToken(UserDetails userDetails) {

        return Jwts.builder()
                .setSubject((userDetails.getUserName()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
}
