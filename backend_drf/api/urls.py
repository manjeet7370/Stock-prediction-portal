from django.urls import path
from accounts import views as user_views

urlpatterns = [
    path('register/', user_views.RegisterView.as_view()),
]
