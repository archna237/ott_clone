# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.home, name='home'),
# ]


from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # this is your user homepage
    # path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),  # admin panel
    path('register/', views.register, name='register'),
    path('signin/', views.signin_view, name='signin'),
]

