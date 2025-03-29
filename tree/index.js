// --- Instrukcje
// 1) Stwórz klasę węzła. Konstruktor
//    powinien przyjmować argument, który jest przypisywany
//    do właściwości data i inicjalizować
//    pustą tablicę do przechowywania dzieci. Klasa węzła
//    powinna mieć metody 'add' i 'remove'.
// 2) Stwórz klasę drzewa. Konstruktor drzewa
//    powinien zainicjalizować właściwość 'root' na null.
// 3) Zaimplementuj 'traverseBF' i 'traverseDF'
//    w klasie drzewa. Każda metoda powinna przyjmować
//    funkcję, która jest wywoływana z każdym elementem drzewa.

// Klasa Node reprezentuje pojedynczy węzeł w drzewie.
class Node {
  // Konstruktor klasy Node, inicjalizuje węzeł z danymi.
  constructor(data) {
    // Przechowuje dane węzła.
    this.data = data;
    // Tablica children przechowuje referencje do dzieci węzła.
    this.children = [];
  }

  // Metoda add dodaje nowe dziecko do węzła.
  add(data) {
    // Tworzy nowy węzeł z przekazanymi danymi i dodaje go do tablicy children.
    this.children.push(new Node(data));
  }

  // Metoda remove usuwa dziecko z węzła na podstawie danych.
  remove(data) {
    // Filtruje tablicę children, usuwając węzeł, którego dane pasują do przekazanych danych.
    this.children = this.children.filter(node => {
      // Zwraca true, jeśli dane węzła są różne od przekazanych danych, zachowując węzeł.
      // Zwraca false, jeśli dane węzła są równe przekazanym danym, usuwając węzeł.
      return node.data !== data;
    });
  }
}

// Klasa Tree reprezentuje strukturę drzewa.
class Tree {
  // Konstruktor klasy Tree, inicjalizuje drzewo z pustym korzeniem.
  constructor() {
    // root przechowuje referencję do korzenia drzewa.
    this.root = null;
  }

  // Metoda traverseBF (Breadth-First) przechodzi drzewo wszerz.
  traverseBF(fn) {
    // Inicjalizuje kolejkę z korzeniem drzewa.
    const arr = [this.root];
    // Wykonuje pętlę, dopóki kolejka nie jest pusta.
    while (arr.length) {
      // Pobiera pierwszy węzeł z kolejki.
      const node = arr.shift();

      // Dodaje dzieci węzła do końca kolejki.
      arr.push(...node.children);
      // Wywołuje przekazaną funkcję fn dla bieżącego węzła.
      fn(node);
    }
  }

  // Metoda traverseDF (Depth-First) przechodzi drzewo w głąb.
  traverseDF(fn) {
    // Inicjalizuje stos z korzeniem drzewa.
    const arr = [this.root];
    // Wykonuje pętlę, dopóki stos nie jest pusty.
    while (arr.length) {
      // Pobiera pierwszy węzeł ze stosu.
      const node = arr.shift();

      // Dodaje dzieci węzła na początek stosu.
      arr.unshift(...node.children);
      // Wywołuje przekazaną funkcję fn dla bieżącego węzła.
      fn(node);
    }
  }
}

// Eksportuje klasy Tree i Node, aby mogły być używane w innych modułach.
module.exports = { Tree, Node };
