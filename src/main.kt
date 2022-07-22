//classes in kotlin
//create an abstract class with open functions that greets,
//create a child class that inherits the abstract class
//override the function and create the object
fun main(){
    var employee=Person("James")
    employee.greetings("Hello")

}
abstract class Student(var name:String){
    abstract fun greetings(var greet:String){
    }

}
class Person(name: String):Student(){
    override fun greetings(var greet:String){
        println("$greet $name")



    }
}

