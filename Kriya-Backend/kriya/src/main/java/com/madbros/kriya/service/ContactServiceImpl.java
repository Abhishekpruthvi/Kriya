package com.madbros.kriya.service;

import com.madbros.kriya.model.*;
import com.madbros.kriya.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
@Service
public class ContactServiceImpl implements ContactService {

    @Autowired
    ContactAnalystRepository contactAnalystRepository;

    @Autowired
    ContactCourseRepository contactCourseRepository;

    @Autowired
    ContactGuestRepository contactGuestRepository;

    @Autowired
    ContactMentorRepository contactMentorRepository;

    @Autowired
    ContactWorkshopRepository contactWorkshopRepository;

    @Override
    public ContactAnalyst contactAnalyst(ContactAnalyst contactAnalyst) {
        return contactAnalystRepository.save(contactAnalyst);
    }

    @Override
    public ContactCourse contactCourse(ContactCourse contactCourse) {
        return contactCourseRepository.save(contactCourse);
    }

    @Override
    public ContactGuest contactGuest(ContactGuest contactGuest) {
        return contactGuestRepository.save(contactGuest);
    }

    @Override
    public ContactMentor contactMentor(ContactMentor contactMentor) {
        return contactMentorRepository.save(contactMentor);
    }

    @Override
    public ContactWorkshop contactWorkshop(ContactWorkshop contactWorkshop) {
        return contactWorkshopRepository.save(contactWorkshop);
    }
}
