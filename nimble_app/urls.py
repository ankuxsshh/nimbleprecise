from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('courses', views.courses, name='courses'),
    path('contact', views.contact, name='contact'),
    path('about', views.about, name='about'),
    path('team', views.team, name='team'),
    path('blogs', views.blogs, name='blogs'),
    path('abacus', views.abacus, name='abacus'),
    path('rubikscube', views.rubikscube, name='rubikscube'),
    path('vedicmaths', views.vedicmaths, name='vedicmaths'),
    path('techworld', views.techworld, name='techworld'),
]