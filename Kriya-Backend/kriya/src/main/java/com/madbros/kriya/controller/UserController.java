package com.madbros.kriya.controller;

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
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("/restricted")
    public ResponseEntity<?> test() {
        return new ResponseEntity<>("Restricted end point",HttpStatus.OK);
    }
}
