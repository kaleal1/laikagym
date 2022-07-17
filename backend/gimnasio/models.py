from django.db import models
from django.forms import DateField


# Create your models here.
class User(models.Model):
    Id = models.AutoField(primary_key=True)
    Username = models.CharField(max_length=50, verbose_name='Username')
    Name = models.CharField(max_length=50, verbose_name='Nombre')
    Height = models.FloatField(verbose_name='Altura')
    Weight = models.FloatField(verbose_name='Peso')

    def __str__(self):
        fila = "Username: " + self.Username + " - " + "Nombre: " + self.Name
        return fila


class Excercise(models.Model):
    objects = None
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50, verbose_name='Nombre')
    Image = models.ImageField(upload_to='images/', verbose_name='Imagen', null=True)
    Description = models.TextField(verbose_name='Descripcion')
    Muscle = models.CharField(max_length=50, verbose_name='Musculo')

    def __str__(self):
        datos = "Nombre: " + self.Name + " - " + "Musculo: " + self.Muscle
        return datos

    # def delete(self, using=None, keep_parents=False):
    #     self.Image.storage.delete(self.Image.name)
    #     super().delete()


class Routine(models.Model):
    objects = None
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=50, verbose_name='Nombre Rutina')


class RoutineExcercise(models.Model):
    Routine = models.ForeignKey(Routine, on_delete=models.CASCADE)
    Excercise = models.ForeignKey(Excercise, on_delete=models.CASCADE)
    Description = models.TextField()


class History(models.Model):
    Id = models.AutoField(primary_key=True)
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)
    RoutineId = models.ForeignKey(Routine, on_delete=models.CASCADE)
    UserNombre = models.CharField(max_length=50, verbose_name='Nombre')
    Weight = models.FloatField(verbose_name='Peso')
    Date = models.DateField(auto_now_add=True, verbose_name='Fecha')
