from django.urls import path

from . import views

urlpatterns = [
    path('ISP/', views.index, name='index'),
  
]