package com.madbros.kriya.repository;

import com.madbros.kriya.model.ContactGuest;
import com.madbros.kriya.model.ContactMentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
@Repository
public interface ContactMentorRepository extends JpaRepository<ContactMentor, Long> {
}
