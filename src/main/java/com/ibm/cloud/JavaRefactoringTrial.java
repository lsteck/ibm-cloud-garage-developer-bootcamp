package com.ibm.cloud;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

public class JavaRefactoringTrial {
	public static void main(String[] args) {
		List<Person> personList = new ArrayList<Person>();


		try {
			personList.addAll(PersonLoader.loadPersonRecordsFromSpaceFile());
			personList.addAll(PersonLoader.loadPersonRecordsFromPipeFile());
			personList.addAll(PersonLoader.loadPersonRecordsFromCommaFile());

			PersonOutputGenerator.generateOutput(personList, "Output 1:\n", PersonOutputGenerator.genderThenLastNameASC);
			PersonOutputGenerator.generateOutput(personList, "\nOutput 2:\n", PersonOutputGenerator.dateofbirthLastNameASC);
			PersonOutputGenerator.generateOutput(personList, "\nOutput 3:\n", PersonOutputGenerator.lastName);

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
	}
}
