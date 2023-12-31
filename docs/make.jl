using SearchingTrees
using Documenter

DocMeta.setdocmeta!(SearchingTrees, :DocTestSetup, :(using SearchingTrees); recursive=true)

makedocs(;
    modules=[SearchingTrees],
    authors="yhqjohn <25428156+yhqjohn@users.noreply.github.com> and contributors",
    repo="https://github.com/yhqjohn/SearchingTrees.jl/blob/{commit}{path}#{line}",
    sitename="SearchingTrees.jl",
    format=Documenter.HTML(;
        prettyurls=get(ENV, "CI", "false") == "true",
        canonical="https://yhqjohn.github.io/SearchingTrees.jl",
        edit_link="main",
        assets=String[],
    ),
    pages=[
        "Home" => "index.md",
        "Interface" => "interface.md",
        "Red-Black Tree" => "red_black_tree.md",
    ],
    warnonly = true,
)

deploydocs(;
    repo="github.com/yhqjohn/SearchingTrees.jl",
    devbranch="main",
)
