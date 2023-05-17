package com.madbros.kriya.repository;

import com.madbros.kriya.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Abhishek Pruthvi V M
 * @since 16/05/23
 */

@Repository
public interface UserRepository extends JpaRepository<UserDetails, Long> {

    UserDetails findByUserName(String username);

    UserDetails findByUserNameAndPassword(String userName, String password);

}
