from django.urls import path
from .views import RegisterView, Protected_view

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('protected/', Protected_view.as_view(), name='protected'),
]
