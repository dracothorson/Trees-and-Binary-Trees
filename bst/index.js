// --- Instrukcje
// 1) Zaimplementuj klasę Node do tworzenia
//    binarnego drzewa wyszukiwania. Konstruktor
//    powinien inicjalizować wartości 'data', 'left'
//    i 'right'.
// 2) Zaimplementuj metodę 'insert' dla klasy Node.
//    Insert powinien przyjmować argument 'data',
//    a następnie tworzyć i wstawiać nowy węzeł
//    w odpowiednim miejscu w drzewie.
// 3) Zaimplementuj metodę 'contains' dla klasy Node.
//    Contains powinien przyjmować argument 'data'
//    i zwracać węzeł w drzewie o tej samej wartości.
//    Jeśli wartość nie znajduje się w drzewie, zwróć null.

// Klasa Node reprezentuje pojedynczy węzeł w binarnym drzewie wyszukiwania
class Node {
// Konstruktor tworzy nowy węzeł z podaną wartością (data)
// Inicjalizuje lewe i prawe dziecko jako null
  constructor(data) {
    this.data = data; // Przechowuje wartość węzła
    this.left = null; // Wskaźnik na lewe dziecko (mniejsze wartości)
    this.right = null; // Wskaźnik na lewe dziecko (mniejsze wartości)
  }
  // Metoda insert dodaje nową wartość do drzewa
  insert(data) {
    // Jeśli nowa wartość jest mniejsza od bieżącej i istnieje lewe dziecko
    if (data < this.data && this.left) {
      // Rekurencyjnie wywołaj insert na lewym dziecku
      this.left.insert(data);
      // Jeśli nowa wartość jest mniejsza i nie ma lewego dziecka
    } else if (data < this.data) {
      // Stwórz nowe lewe dziecko z podaną wartością
      this.left = new Node(data);
      // Jeśli nowa wartość jest większa i istnieje prawe dziecko
    } else if (data > this.data && this.right) {
      // Rekurencyjnie wywołaj insert na prawym dziecku
      this.right.insert(data);
      // Jeśli nowa wartość jest większa i nie ma prawego dziecka
    } else if (data > this.data) {
      // Stwórz nowe prawe dziecko z podaną wartością
      this.right = new Node(data);
    }
    // Wartości równe są pomijane (brak duplikatów)
  }

  // Metoda contains wyszukuje węzeł z podaną wartością
  contains(data) {
    // Jeśli bieżący węzeł ma szukaną wartość
    if (this.data === data) {
      // Zwróć bieżący węzeł
      return this;
    }

    // Jeśli szukana wartość jest większa i istnieje prawe dziecko
    if (this.data < data && this.right) {
      // Rekurencyjnie szukaj w prawym poddrzewie
      return this.right.contains(data);
    // Jeśli szukana wartość jest mniejsza i istnieje lewe dziecko
    } else if (this.data > data && this.left) {
      // Rekurencyjnie szukaj w lewym poddrzewie
      return this.left.contains(data);
    }

    // Jeśli wartości nie znaleziono, zwróć null
    return null;
  }
}

// Eksportuje klasę Node do użycia w innych plikach
module.exports = Node;
