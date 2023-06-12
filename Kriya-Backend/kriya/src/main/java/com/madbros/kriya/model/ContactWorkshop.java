package com.madbros.kriya.model;

import lombok.Data;

import javax.persistence.*;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
@Entity
@Table(name = "contact_workshop")
@Data
public class ContactWorkshop {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name = "contact_number")
    private String contactNumber;

    @Column(name = "contact_email")
    private String contactEmail;

    @Column(name = "audience_type")
    private String audienceType;

    @Column(name = "institute_relation")
    private String instituteRelation;

    @Column(name = "institute")
    private String institute;

    @Column(name = "topic", columnDefinition = "text")
    private String topic;

    @Column(name = "additional_points", columnDefinition = "text")
    private String additionalPoints;

}
