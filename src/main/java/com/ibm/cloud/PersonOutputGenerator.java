package com.ibm.cloud;

import java.util.Comparator;
import java.util.List;

public class PersonOutputGenerator {
	public static void generateOutput(List<Person> personList, String title, Comparator<Person> personComparator) {

    personList.sort(personComparator);
    System.out.println(title);
    personList.forEach(System.out::println);
	}

	 static Comparator<Person> genderThenLastNameASC = new Comparator<Person>() {
	      // sort by Gender, then by LastName in ascending order
	      public int compare(Person p1, Person p2) {
	        if(!p1.getGender().equals(p2.getGender())) {
	          return p1.getGender().compareTo(p2.getGender());
	        }

	        return p1.getLastName().compareTo(p2.getLastName());
	      }
	    };

	 static Comparator<Person> dateofbirthLastNameASC = new Comparator<Person>() {
	      // sort by DateOfBirth in ascending order, then by LastName in ascending order
	      public int compare(Person p1, Person p2) {
	        if(p1.getDateOfBirth().compareTo(p2.getDateOfBirth()) != 0) {
	          return p1.getDateOfBirth().compareTo(p2.getDateOfBirth());
	        }

	        return p1.getLastName().compareTo(p2.getLastName());
	      }
	    };

   static Comparator<Person> lastName = new Comparator<Person>() {
        // sort by LastName in descending order
        public int compare(Person p1, Person p2) {
          return p2.getLastName().compareTo(p1.getLastName());
        }
      };
}
