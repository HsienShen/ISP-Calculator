from django.shortcuts import render
from django.http import HttpResponse


def calc():
    x = 1
    y = 2
    return x+y

def index(request):
    x = calc()
    y = 2
    return render(request,  'hello.html', {'name': ''})