interface ProblemGroup {
  name: string;
  problems: { name: string; link: string }[];
}

export const problemGroupings: ProblemGroup[] = [
  {
    name: "array",
    problems: [
      { name: "two_sum", link: "https://leetcode.com/problems/two-sum/" },
      {
        name: "best_time_to_buy_and_sell_stock",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        name: "contains_duplicate",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        name: "product_of_array_except_self",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        name: "maximum_subarray",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        name: "maximum_product_subarray",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
      },
      {
        name: "find_minimum_in_rotated_sorted_array",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        name: "search_in_rotated_sorted_array",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      { name: "three_sum", link: "https://leetcode.com/problems/3sum/" },
      {
        name: "container_with_most_water",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
    ],
  },

  {
    name: "binary",
    problems: [
      {
        name: "sum_of_two_integers",
        link: "https://leetcode.com/problems/sum-of-two-integers/",
      },
      {
        name: "number_of_one_bits",
        link: "https://leetcode.com/problems/number-of-1-bits/",
      },
      {
        name: "missing_bits",
        link: "https://leetcode.com/problems/counting-bits/",
      },
      {
        name: "missing_number",
        link: "https://leetcode.com/problems/missing-number/",
      },
      {
        name: "reverse_bits",
        link: "https://leetcode.com/problems/reverse-bits/",
      },
    ],
  },
  {
    name: "dynamic_programming",
    problems: [
      {
        name: "climbing_stairs",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        name: "coin_change",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        name: "longest_increasing_subsequence",
        link: "https://leetcode.com/problems/longest-increasing-subsequence/",
      },
      {
        name: "longest_common_subsequence",
        link: "https://leetcode.com/problems/longest-common-subsequence/",
      },
      {
        name: "word_break_problem",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        name: "combination_sum",
        link: "https://leetcode.com/problems/combination-sum-iv/",
      },
      {
        name: "house_robber",
        link: "https://leetcode.com/problems/house-robber/",
      },
      {
        name: "house_robber_two",
        link: "https://leetcode.com/problems/house-robber-ii/",
      },
      {
        name: "decode_ways",
        link: "https://leetcode.com/problems/decode-ways/",
      },
      {
        name: "unique_paths",
        link: "https://leetcode.com/problems/unique-paths/",
      },
      { name: "jump_game", link: "https://leetcode.com/problems/jump-game/" },
    ],
  },
  {
    name: "graph",
    problems: [
      {
        name: "clone_graph",
        link: "https://leetcode.com/problems/clone-graph/",
      },
      {
        name: "course_schedule",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        name: "pacific_atlantic_water_flow",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
      {
        name: "number_of_islands",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        name: "longest_consecutive_sequence",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
    ],
  },
  {
    name: "interval",
    problems: [
      {
        name: "insert_interval",
        link: "https://leetcode.com/problems/insert-interval/",
      },
      {
        name: "merge_intervals",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        name: "non_overlapping_intervals",
        link: "https://leetcode.com/problems/non-overlapping-intervals/",
      },
    ],
  },
  {
    name: "linked_list",
    problems: [
      {
        name: "reverse_a_linked_list",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        name: "detect_cycle_in_linked_list",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        name: "merge_two_sorted_lists",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
      },
      {
        name: "merge_k_sorted_lists",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        name: "remove_nth_node_from_end_of_list",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      },
      {
        name: "reorder_list",
        link: "https://leetcode.com/problems/reorder-list/",
      },
    ],
  },
  {
    name: "matrix",
    problems: [
      {
        name: "set_matrix_zeroes",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
      },
      {
        name: "spiral_matrix",
        link: "https://leetcode.com/problems/spiral-matrix/",
      },
      {
        name: "rotate_image",
        link: "https://leetcode.com/problems/rotate-image/",
      },
      {
        name: "word_search",
        link: "https://leetcode.com/problems/word-search/",
      },
    ],
  },
  {
    name: "string",
    problems: [
      {
        name: "longest_substring_without_repeating_characters",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        name: "longest_repeating_character_replacement",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        name: "minimum_window_substring",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        name: "valid_anagram",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        name: "group_anagrams",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        name: "valid_parentheses",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        name: "valid_palindrome",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        name: "longest_palindromic_substring",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
      },
      {
        name: "palindromic_substrings",
        link: "https://leetcode.com/problems/palindromic-substrings/",
      },
    ],
  },
  {
    name: "tree",
    problems: [
      {
        name: "maximum_depth_of_binary_tree",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      { name: "same_tree", link: "https://leetcode.com/problems/same-tree/" },
      {
        name: "invert_flip_binary_tree",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        name: "binary_tree_maximum_path_sum",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
      {
        name: "binary_tree_level_order_traversal",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        name: "serialize_and_deserialize_binary_tree",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
      {
        name: "subtree_of_another_tree",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        name: "construct_binary_tree_from_preorder_and_inorder_traversal",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        name: "validate_binary_search_tree",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        name: "kth_smallest_element_in_bst",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
      {
        name: "lowest_common_ancestor_of_bst",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        name: "implement_trie",
        link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      },
      {
        name: "add_and_search_word",
        link: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
      },
      {
        name: "word_search_two",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
    ],
  },
  {
    name: "heap",
    problems: [
      {
        name: "merge_k_sorted_lists",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        name: "top_k_frequent_elements",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        name: "find_median_from_data_stream",
        link: "https://leetcode.com/problems/find-median-from-data-stream/",
      },
    ],
  },
];
