from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from api.models import Post
from api.serializers import PostSerializer

class Postlist(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer