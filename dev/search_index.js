var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = SearchingTrees","category":"page"},{"location":"#SearchingTrees","page":"Home","title":"SearchingTrees","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for SearchingTrees, searching tree container for Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Types","page":"Home","title":"Types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"AbstractBinTree{T}","category":"page"},{"location":"#SearchingTrees.SearchingTreeCore.AbstractBinTree","page":"Home","title":"SearchingTrees.SearchingTreeCore.AbstractBinTree","text":"abstract type AbstractBinTree{T} <: AbstractNode{T}\n\nAbstractBinTree is an abstract type for binary trees. It is a subtype of AbstractTrees.AbstractNode{T}.\n\ninterface\n\nSuch methods should be implemented for AbstractBinTree{T}:\n\nleft(t::AbstractBinTree): return the left child of t. The default implementation is t.left.\nright(t::AbstractBinTree): return the right child of t. The default implementation is t.right.\nparent(t::AbstractBinTree): return the parent of t. This should be implemented if you want to use the default iterate method. The default implementation is t.parent.\nnodevalue(t::AbstractBinTree{T}): return the value of t of type T.\n\n\n\n\n\n","category":"type"}]
}