"""professor.py: create a table named professors in the marist database"""
from db.db import db

class Professor(db.Model):
    __tablename__ = 'Professors'
    ProfessorID = db.Column(db.Integer,primary_key=True, autoincrement=True)
    ProfessorFName = db.Column(db.String(40))
    ProfessorLName = db.Column(db.String(40))
    ProfessorEmail = db.Column(db.String(40))

    # create relationship with courses table. assoc table name = ProfessorCourse
    course = db.relationship('Courses', secondary = 'ProfessorCourse', back_populates = 'Professors')
    def __init__(self):
        # remove pass and then initialize attributes
        self.ProfessorID = self.ProfessorID
        self.ProfessorFName = self.ProfessorFName
        self.ProfessorLName = self.ProfessorLName
        self.ProfessorEmail = self.ProfessorEmail
    def __repr__(self):
        # add text to the f-string
        return f"""
            "Professor ID: {self.ProfessorID},
            First Name: {self.ProfessorFName}
            Last Name: {self.ProfessorLName}
            Email: {self.ProfessorEmail}
        """
    
    def __repr__(self):
        return self.__repr__()