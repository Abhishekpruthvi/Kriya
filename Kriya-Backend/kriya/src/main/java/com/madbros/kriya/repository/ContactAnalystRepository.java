package com.madbros.kriya.repository;

import com.madbros.kriya.model.ContactAnalyst;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
@Repository
public interface ContactAnalystRepository extends JpaRepository<ContactAnalyst, Long> {
}
