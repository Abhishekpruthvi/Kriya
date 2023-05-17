package com.madbros.kriya.controller;

import com.madbros.kriya.dto.TokenResponseDto;
import com.madbros.kriya.model.UserDetails;
import com.madbros.kriya.service.JwtGenerator;
import com.madbros.kriya.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */

@RestController
@RequestMapping("/openapi/")
public class LoginController {

    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    JwtGenerator jwtGenerator;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDetails userDetails) {
        userDetails = userDetailsService.saveUser(userDetails);
        return new ResponseEntity<>(userDetails, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserDetails user) {
        TokenResponseDto tokenResponseDto = new TokenResponseDto();
        try {
            if(user.getUserName() == null || user.getPassword() == null) {
                throw new RuntimeException("UserName or Password is Empty");
            }
            UserDetails userData = userDetailsService.findByUserNameAndPassword(user.getUserName(), user.getPassword());
            if(userData == null){
                throw new RuntimeException("UserName or Password is Invalid");
            }
            tokenResponseDto.setUserName(userData.getUserName());
            tokenResponseDto.setRole(userData.getRole());
            tokenResponseDto.setToken(jwtGenerator.generateToken(user));
            return new ResponseEntity<>(tokenResponseDto, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

}
