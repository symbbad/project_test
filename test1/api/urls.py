from django.urls import path
from . import views

urlpatterns = [
    path('', views.Postlist.as_view(), name='post-list'),
]
