from django.shortcuts import render

# Create your views here.



def view_index(request):
    return render(request, "spa/index.html")


def view_page_1(request):
    return render(request, "spa/page1.html")

    
def view_page_2(request):
    return render(request, "spa/page2.html")

    
def view_page_3(request):
    return render(request, "spa/page3.html")