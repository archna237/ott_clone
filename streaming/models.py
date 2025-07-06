from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)

    class Meta:
        managed = False  # Django won't try to create or migrate this table
        db_table = 'user'  # Must exactly match your DB table name

    def __str__(self):
        return self.name
