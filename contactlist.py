from faker import Faker 
import json            # To create a json file                 
from random import randint      # For student id 
fake = Faker() 
def input_data(x): 
  print 1,2,3,4,5,6,7,
    # dictionary 
    student_data ={} 
    for i in range(0, x): 
        student_data[i]={} 
        student_data[i]['id']= randint(1, 100) 
        student_data[i]['name']= fake.name() 
        student_data[i]['address']= fake.address() 
        student_data[i]['latitude']= str(fake.latitude()) 
        student_data[i]['longitude']= str(fake.longitude()) 
    print(student_data) 
  
    # dictionary dumped as json in a json file 
    with open('students.json', 'w') as fp: 
        json.dump(student_data, fp) 
      
  
def main(): 
  
    # Enter number of students 
    number_of_students = 10  # For the above task make this 100 
    input_data(number_of_students) 
main() 