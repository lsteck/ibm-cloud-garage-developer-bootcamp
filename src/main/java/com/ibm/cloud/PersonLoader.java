package com.ibm.cloud;

import java.io.File;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PersonLoader {
  public static List<Person> loadPersonRecordsFromSpaceFile() throws java.io.FileNotFoundException {
    String inputFilePath = "./data/space.txt";
    String[] elements = {Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE,
    Person.GENDER, Person.DATE_OF_BIRTH, Person.COLOR};
    String delimiter = "\\s+";

    return loadPersonRecords(inputFilePath, elements, delimiter);
  }

  public static List<Person> loadPersonRecordsFromPipeFile() throws java.io.FileNotFoundException {
    String inputFilePath = "./data/pipe.txt";
    String[] elements = {Person.LAST_NAME, Person.FIRST_NAME, Person.IGNORE,
    Person.GENDER, Person.COLOR, Person.DATE_OF_BIRTH};
    String delimiter = "\\s*\\|\\s*";

    return loadPersonRecords(inputFilePath, elements, delimiter);
  }

  public static List<Person> loadPersonRecordsFromCommaFile() throws java.io.FileNotFoundException {
    String inputFilePath = "./data/comma.txt";
    String[] elements = {Person.LAST_NAME, Person.FIRST_NAME, Person.GENDER,
    Person.COLOR, Person.DATE_OF_BIRTH};
    String delimiter = "\\s*,\\s*";

    return loadPersonRecords(inputFilePath, elements, delimiter);
  }


  private static List<Person> loadPersonRecords(String inputFilePath, String[] elements, String delimiter) throws java.io.FileNotFoundException {
    List<Person> personList = new ArrayList<Person>();

    try(Scanner scanner = new Scanner(new File(inputFilePath))) {
      while(scanner.hasNextLine()) {
        String line = scanner.nextLine();

        try {
          Person person = parser(line, elements, delimiter);
          personList.add(person);
        }
        catch(PersonParseException e) {
          e.printStackTrace();
        }
      }
    }

    return personList;
  }

  /**
   Constructs a Person object by parsing a string that contains attributes for
   the Person.

   @param line         input text string
   @param lineElements ordering of the elements within the text string
   @param delimiter    defines the delimiter pattern that separates individual
   tokens in the input text string - refer {@link
   java.util.Scanner} for definition of the delimiter
   pattern

   @throws PersonParseException if a parsing is encountered in the input text
   string
   */

  public static Person parser(String line, String[] lineElements, String delimiter) throws PersonParseException {
    try(Scanner scanner = new Scanner(line)) {
      scanner.useDelimiter(delimiter);
      int i = 0;
      PersonBuilder personBuilder = new PersonBuilder();

      while(scanner.hasNext()) {
        String token = scanner.next();

        switch(lineElements[i++]) {

          case Person.FIRST_NAME:
            personBuilder.setFirstName(token);
            break;

          case Person.LAST_NAME:
            personBuilder.setLastName(token);
            break;

          case Person.GENDER:
            if(token.startsWith("M")) {
              personBuilder.setGender(Gender.MALE);
            }
            else if(token.startsWith("F")) {
              personBuilder.setGender(Gender.FEMALE);
            }
            else {
              throw new PersonParseException("Invalid gender encountered");
            }
            break;

          case Person.DATE_OF_BIRTH:
            SimpleDateFormat format = null;

            if(token.contains("/")) {
              format = new SimpleDateFormat("MM/dd/yyyy");
            }
            else if(token.contains("-")) {
              format = new SimpleDateFormat("MM-dd-yyyy");
            }
            else {
              throw new PersonParseException("Invalid date encountered");
            }

            try {
              personBuilder.setDateOfBirth(format.parse(token));
            }
            catch(ParseException e) {
              throw new PersonParseException("Invalid date encountered");
            }
            break;

          case Person.COLOR:
            personBuilder.setColor(token);
            break;

          default:
            break;
        }
      }
      return personBuilder.createPerson();
    }
  }

}
