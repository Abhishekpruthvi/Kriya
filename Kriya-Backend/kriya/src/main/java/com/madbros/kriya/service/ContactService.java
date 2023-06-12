package com.madbros.kriya.service;

import com.madbros.kriya.model.*;

/**
 * @author Abhishek Pruthvi V M
 * @since 11/06/23
 */
public interface ContactService {

    ContactAnalyst contactAnalyst(ContactAnalyst contactAnalyst);

    ContactCourse contactCourse(ContactCourse contactCourse);

    ContactGuest contactGuest(ContactGuest contactGuest);

    ContactMentor contactMentor(ContactMentor contactMentor);

    ContactWorkshop contactWorkshop(ContactWorkshop contactWorkshop);
}
