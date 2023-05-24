package com.madbros.kriya.repository;

import com.madbros.kriya.model.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */
public interface FileRepository extends JpaRepository<File, Long> {

    @Modifying
    @Query(value = "select file_id as fileId, owner_name as ownerName, file_name as fileName , description from file where owner_name = :ownerName", nativeQuery = true)
    List<FileProjection> findAllByOwnerName(@Param("ownerName") String ownerName);

}
