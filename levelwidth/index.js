// --- Instrukcje
// Mając dany węzeł korzenia drzewa, zwróć
// tablicę, gdzie każdy element to szerokość
// drzewa na każdym poziomie.
// --- Przykład
// Dane:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Odpowiedź: [1, 3, 2]

function levelWidth(root) {
  // Inicjalizacja tablicy 'arr' z korzeniem drzewa i separatorem 's'.
  // Separator 's' służy do oznaczania końca poziomu w drzewie.
  const arr = [root, 's'];
  // Inicjalizacja tablicy 'counters' z pierwszym licznikiem (dla korzenia).
  const counters = [0];

  // Pętla wykonuje się, dopóki w tablicy 'arr' jest więcej niż jeden element (czyli dopóki są węzły do przetworzenia).
  while (arr.length > 1) {
    // Pobranie pierwszego elementu z tablicy 'arr'.
    const node = arr.shift();

    // Sprawdzenie, czy pobrany element to separator 's'.
    if (node === 's') {
      // Jeśli to separator, oznacza to koniec poziomu.
      // Dodanie nowego licznika do tablicy 'counters' (dla następnego poziomu).
      counters.push(0);
      // Dodanie separatora 's' na koniec tablicy 'arr', aby oznaczyć koniec następnego poziomu.
      arr.push('s');
    } else {
      // Jeśli pobrany element to węzeł, dodanie jego dzieci do tablicy 'arr'.
      arr.push(...node.children);
      // Zwiększenie licznika dla bieżącego poziomu w tablicy 'counters'.
      counters[counters.length - 1]++;
    }
  }

  // Zwrócenie tablicy 'counters', która zawiera szerokości każdego poziomu drzewa.
  return counters;
}

// Eksport funkcji 'levelWidth', aby mogła być używana w innych modułach.
module.exports = levelWidth;