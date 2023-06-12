package com.madbros.kriya.controller;

import com.madbros.kriya.model.*;
import com.madbros.kriya.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
@RestController
@RequestMapping("/openapi/contact")
public class ContactController {

    @Autowired
    ContactService contactService;

    @PostMapping("/analyst")
    public ResponseEntity<?> contactAnalyst(@RequestBody ContactAnalyst contactAnalyst) {
        contactAnalyst = contactService.contactAnalyst(contactAnalyst);
        return new ResponseEntity(contactAnalyst, HttpStatus.OK);
    }
    @PostMapping("/course")
    public ResponseEntity<?> contactCourse(@RequestBody ContactCourse contactCourse) {
        contactCourse = contactService.contactCourse(contactCourse);
        return new ResponseEntity(contactCourse, HttpStatus.OK);
    }

    @PostMapping("/guest")
    public ResponseEntity<?> contactGuest(@RequestBody ContactGuest contactGuest) {
        contactGuest = contactService.contactGuest(contactGuest);
        return new ResponseEntity(contactGuest, HttpStatus.OK);
    }

    @PostMapping("/mentor")
    public ResponseEntity<?> contactMentor(@RequestBody ContactMentor contactMentor) {
        contactMentor = contactService.contactMentor(contactMentor);
        return new ResponseEntity(contactMentor, HttpStatus.OK);
    }

    @PostMapping("/workshop")
    public ResponseEntity<?> contactWorkshop(@RequestBody ContactWorkshop contactWorkshop) {
        contactWorkshop = contactService.contactWorkshop(contactWorkshop);
        return new ResponseEntity(contactWorkshop, HttpStatus.OK);
    }
}
