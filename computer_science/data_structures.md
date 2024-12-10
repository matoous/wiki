# Data Structures

## [**Bloom Filter**](https://en.wikipedia.org/wiki/Bloom_filter)

> A Bloom filter is a space-efficient probabilistic data structure that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not. Elements can be added to the set, but not removed; the more items added, the larger the probability of false positives. 

## [**HyperLogLog**](https://en.wikipedia.org/wiki/HyperLogLog)

> HyperLogLog is an algorithm for the count-distinct problem, approximating the number of distinct elements in a multiset. Calculating the exact cardinality of the distinct elements of a multiset requires an amount of memory proportional to the cardinality, which is impractical for very large data sets. Probabilistic cardinality estimators, such as the HyperLogLog algorithm, use significantly less memory than this, but can only approximate the cardinality. The HyperLogLog algorithm is able to estimate cardinalities of > 109 with a typical accuracy (standard error) of 2%, using 1.5 kB of memory.

## [**B-Tree**](https://en.wikipedia.org/wiki/B-tree)

> B-tree is a self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. The B-tree generalizes the binary search tree, allowing for nodes with more than two children. Unlike other self-balancing binary search trees, the B-tree is well suited for storage systems that read and write relatively large blocks of data, such as databases and file systems. 

- [how the append-only btree works](https://www.bzero.se/ldapd/btree.html)

## [**k-d tree**](https://en.wikipedia.org/wiki/K-d_tree)

> k-dimensional tree (k-d tree) is a space-partitioning data structure for organizing points in a k-dimensional space. K-dimensional is that which concerns exactly `k` orthogonal axes or a space of any number of dimensions. k-d trees are a useful data structure for several applications, such as searches involving a multidimensional search key (e.g. range searches and nearest neighbor searches) or creating point clouds. k-d trees are a special case of [binary space partitioning](https://en.wikipedia.org/wiki/Binary_space_partitioning) trees. 

## Ropes

- [Rope science](https://xi-editor.io/docs/rope_science_00.html)

## [**CRDT**](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type) (Conflict-free Replication Data Type)

- [An Interactive Intro to CRDTs](https://jakelazaroff.com/words/an-interactive-intro-to-crdts/) - CRDT = Conflict-free Replicated Data Type
- [cola: a text CRDT for real-time collaborative editing](https://nomad.foo/blog/cola) - leightweight CRDT implemention in rust for plain text documents.
- [Collaborative Editing in ProseMirror](https://marijnhaverbeke.nl/blog/collaborative-editing.html)
- [CRDTs Turned Inside Out](https://interjectedfuture.com/crdts-turned-inside-out/) #crdt #text-editing
- [Ink and Switch](https://www.inkandswitch.com) - Articles on collaborative peer-to-peer editing #crdt #text-editing
- [yjs](https://yjs.dev) - a shared editing framework
  - [Y-sweet](https://docs.jamsocket.com/y-sweet) - Y-Sweet is an open-source Yjs sync server

## Resources

- [PruningRadixTrie](https://github.com/wolfgarbe/PruningRadixTrie)
- [6.851: Advanced Data Structures](https://courses.csail.mit.edu/6.851/spring21/lectures/)
