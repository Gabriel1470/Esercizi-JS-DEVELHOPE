# Object Copying - Exercise 1
In questo esercizio sono stati creati due oggeti: `person1` e `person2`. All'oggetto `person2` è stato assegnato l'oggetto `person1`. Si desidera che venga modificata la proprietà `firstName` dell'oggetto `person2` in "Simon".

Sai spiegare il perché modificando l'oggetto `person2` viene modificato anche l'oggetto `person1`?


Risposta: Perchè si sta copiando la locazione di memoria quindi sono collegate e modificando un valore a uno in automatico cambia l'altro, per evitare cio si usa Object.assign({},object1) che crea la copia del'primo oggetto nel secondo in un altra locazione di memoria.