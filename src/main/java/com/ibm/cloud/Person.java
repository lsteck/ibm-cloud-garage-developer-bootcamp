package com.ibm.cloud;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Person{
  public final static String FIRST_NAME = "firstName";
  public final static String LAST_NAME = "lastName";
  public final static String GENDER = "gender";
  public final static String DATE_OF_BIRTH = "dateOfBirth";
  public final static String COLOR = "color";
  public final static String IGNORE = "ignore";

  private String firstName;
  private String lastName;
  private Gender gender;
  private Date dateOfBirth;
  private String color;


  public Person(String firstName, String lastName, Gender gender, Date dateOfBirth, String color) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.color = color;
  }


  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public Gender getGender() { return gender; }

  public Date getDateOfBirth() { return dateOfBirth; }

  public String getColor() { return color; }

  @Override
  public String toString() {
    SimpleDateFormat format = new SimpleDateFormat("M/d/yyyy");

    return lastName + " " + firstName + " " + gender + " " + format.format(dateOfBirth) + " " + color;
  }


}
