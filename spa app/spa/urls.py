
from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_index, name='index'),
    path('page1', views.view_page_1, name='page-1'),
    path('page2', views.view_page_2, name='page-2'),
    path('page3', views.view_page_3, name='page-3'), 
]
