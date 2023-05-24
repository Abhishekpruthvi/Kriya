package com.madbros.kriya.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

/**
 * @author Abhishek Pruthvi V M
 * @since 23/05/23
 */
@Entity
@Table(name = "file")
@Data
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "file_id")
    private Long fileId;

    @Column(name = "owner_name")
    private String ownerName;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "description")
    private String description;

    @Lob
    @Column(name = "content")
    private byte[] content;

}
