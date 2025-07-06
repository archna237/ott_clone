from django.shortcuts import render
from .models import User

def home(request):
    return render(request, 'home.html')


from django.shortcuts import render
from .models import User

def home(request):
    return render(request, 'home.html')


def register(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password = request.POST.get('password')

        print(f"Signup attempt: {name}, {email}")

        if User.objects.filter(email=email).exists():
            return render(request, 'home.html', {'error': 'email_exists'})

        User.objects.create(name=name, email=email, password=password)
        print("User created successfully")

        return render(request, 'home.html', {'signup_success': True})

    return render(request, 'home.html')




from django.http import JsonResponse
from .models import User
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signin_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = User.objects.get(email=email)
            if user.password == password:
                # You can add session login logic here if needed
                return JsonResponse({'success': True})
            else:
                return JsonResponse({'success': False, 'message': 'Invalid password'})
        except User.DoesNotExist:
            return JsonResponse({'success': False, 'message': 'User not found'})
