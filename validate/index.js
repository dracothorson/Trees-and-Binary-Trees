// --- Instrukcje
// Mając dany węzeł, zweryfikuj binarne drzewo wyszukiwania,
// upewniając się, że lewe dziecko każdego węzła jest
// mniejsze niż wartość węzła rodzica, i że
// prawe dziecko każdego węzła jest większe niż
// rodzic.

// Funkcja validate sprawdza, czy drzewo BST (Binary Search Tree) jest prawidłowe
// Przyjmuje węzeł (node) oraz opcjonalne granice min i max
function validate(node, min = null, max = null) {
  // Jeśli max jest określony i wartość węzła jest większa niż max,
  // zwraca false (naruszenie zasad BST)
  if (max !== null && node.data > max) {
    return false;
  }

  // Jeśli min jest określony i wartość węzła jest mniejsza niż min,
  // zwraca false (naruszenie zasad BST)
  if (min !== null && node.data < min) {
    return false;
  }

  // Jeśli istnieje lewe dziecko, rekurencyjnie sprawdza lewe poddrzewo
  // Nowe max to wartość bieżącego węzła, bo w BST lewe dzieci muszą być mniejsze
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  // Jeśli istnieje prawe dziecko, rekurencyjnie sprawdza prawe poddrzewo
  // Nowe min to wartość bieżącego węzła, bo w BST prawe dzieci muszą być większe
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  // Jeśli wszystkie warunki są spełnione, zwraca true - drzewo jest prawidłowe
  return true;
}

// Eksportuje funkcję validate, aby mogła być użyta w innych modułach
module.exports = validate;