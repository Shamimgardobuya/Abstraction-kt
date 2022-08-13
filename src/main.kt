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

fun planets(name:String){
    println("Enter the name of the heavenly body")
//     var name=readline()!!.toString()
    when(name) {
        "Sun" -> println("Is a star")
        "Moon" -> println("Moon comes out at night")
        "Earth" -> println("Is the third planet")
        else -> println("This planet does not exists")
    }

}
//create a function for using when as an expression
fun calculate(number:Int){
    var number2=when(number){
        1->println("This is number one")
        2 ->println("This is number two")
        4 ->println("This is number four")
        else ->println("This number is greater than 3 ")
    }
}
