from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from gimnasio.models import User
from gimnasio.models import Excercise
from gimnasio.models import Routine
#from backend.gimnasio.models import History
from gimnasio.serializers import UserSerializer, ExcerciseSerializer, RoutineSerializer, RegisterSerializer, MeSerializer


class ExcerciseViewSet(viewsets.ModelViewSet):
    serializer_class = ExcerciseSerializer
    queryset = Excercise.objects.all()

    # permission_classes = [IsAuthenticated] esto es si quiero autenticar get, post, put
    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(ExcerciseViewSet, self).get_permissions()  # esto es para autenticr solo una


class RoutineViewSet(viewsets.ModelViewSet):
    serializer_class = RoutineSerializer
    queryset = Routine.objects.all()

    def get_queryset(self):
        queryset = Routine.objects.all()
        routinetype = self.request.query_params.get('routinetype')
        # price = self.request.query_params.get('price')
        # if routinetype is not None and price is not None:
        #     queryset = queryset.filter(routinetype=routinetype).filter(price__gte=price)
        # elif routinetype is not None:
        #     queryset = queryset.filter(routinetype=routinetype)
        # elif price is not None:
        #     queryset = queryset.filter(price__gte=price)
        # return queryset

    # permission_classes = [IsAuthenticated] esto es si quiero autenticar get, post, put
    def get_permissions(self):
        if self.action == 'create':
            self.permission_classes = [IsAuthenticated]
        else:
            self.permission_classes = []
        return super(RoutineViewSet, self).get_permissions()  # esto es para autenticr solo una


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    serializer = MeSerializer(request.user)
    print(serializer.data)
    return Response(data=serializer.data, status=200)
