package com.madbros.kriya.dto;

import com.madbros.kriya.enums.RoleEnum;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */

@Data
public class TokenResponseDto {

    private Long userId;

    private String userName;

    private String firstName;

    private String lastName;

    private String email;

    private String mobileNumber;

    private RoleEnum role;

    private String token ;

}
