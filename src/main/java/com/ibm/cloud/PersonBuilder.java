package com.ibm.cloud;

import java.util.Date;

public class PersonBuilder {
  private String firstName;
  private String lastName;
  private Gender gender;
  private Date dateOfBirth;
  private String color;

  public PersonBuilder()
  {

  }

  public PersonBuilder setFirstName(String firstName) {
    this.firstName = firstName;
    return this;
  }
  public PersonBuilder setLastName(String lastName) {
    this.lastName = lastName;
    return this;
  }
  public PersonBuilder setGender(Gender gender) {
    this.gender = gender;
    return this;
  }
  public PersonBuilder setDateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }
  public PersonBuilder setColor(String color) {
    this.color = color;
    return this;
  }

  public Person createPerson() {
   return new Person(firstName, lastName, gender, dateOfBirth, color);
  }
}
