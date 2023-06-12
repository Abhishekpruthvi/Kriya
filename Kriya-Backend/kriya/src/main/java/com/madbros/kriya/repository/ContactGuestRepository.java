package com.madbros.kriya.repository;

import com.madbros.kriya.model.ContactAnalyst;
import com.madbros.kriya.model.ContactGuest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
@Repository
public interface ContactGuestRepository extends JpaRepository<ContactGuest, Long> {
}
