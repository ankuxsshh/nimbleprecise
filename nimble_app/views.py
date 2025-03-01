from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def courses(request):
    return render(request, 'courses.html')

def team(request):
    return render(request, 'team.html')

def contact(request):
    return render(request, 'contact.html')

def blogs(request):
    return render(request, 'blogs.html')

def abacus(request):
    return render(request, 'abacus.html')

def vedicmaths(request):
    return render(request, 'vedicmaths.html')

def techworld(request):
    return render(request, 'techworld.html')

def rubikscube(request):
    return render(request, 'rubikscube.html')