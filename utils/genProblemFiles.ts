interface ProblemGroup {
  name: string;
  problems: { name: string; link?: string }[];
}

const _problemGroupings: ProblemGroup[] = [
  {
    name: "array",
    problems: [
      { name: "two_sum", link: "" },
      { name: "best_time_to_buy_and_sell_stock" },
      { name: "contains_duplicate", link: "" },
      { name: "product_of_array_except_self" },
      { name: "maximum_subarray", link: "" },
      { name: "maximum_product_subarray" },
      { name: "find_minimum_in_rotated_sorted_array" },
      { name: "search_in_rotated_sorted_array", link: "" },
      { name: "three_sum", link: "" },
      { name: "container_with_most_water", link: "" },
    ],
  },
  {
    name: "binary",
    problems: [
      { name: "sum_of_two_integers", link: "" },
      { name: "number_of_one_bits", link: "" },
      { name: "missing_bits", link: "" },
      { name: "missing_number", link: "" },
      { name: "reverse_bits", link: "" },
    ],
  },
  {
    name: "dynamic_programming",
    problems: [
      { name: "climbing_stairs", link: "" },
      { name: "coin_change", link: "" },
      { name: "longest_increasing_subsequence", link: "" },
      { name: "longest_common_subsequence", link: "" },
      { name: "word_break_problem", link: "" },
      { name: "combination_sum", link: "" },
      { name: "house_robber", link: "" },
      { name: "house_robber_two", link: "" },
      { name: "decode_ways", link: "" },
      { name: "unique_paths", link: "" },
      { name: "jump_game", link: "" },
    ],
  },
  {
    name: "graph",
    problems: [
      { name: "clone_graph", link: "" },
      { name: "course_schedule", link: "" },
      { name: "pacific_atlantic_water_flow", link: "" },
      { name: "number_of_islands", link: "" },
      { name: "longest_consecutive_sequence", link: "" },
    ],
  },
  {
    name: "interval",
    problems: [
      { name: "insert_interval", link: "" },
      { name: "merge_intervals" },
      { name: "non_overlapping_intervals", link: "" },
    ],
  },
  {
    name: "linked_list",
    problems: [
      { name: "reverse_a_linked_list", link: "" },
      { name: "detect_cycle_in_linked_list", link: "" },
      { name: "merge_two_sorted_lists", link: "" },
      { name: "merge_k_sorted_lists", link: "" },
      { name: "remove_nth_node_from_end_of_list", link: "" },
      { name: "reorder_list", link: "" },
    ],
  },
  {
    name: "matrix",
    problems: [
      { name: "set_matrix_zeroes", link: "" },
      { name: "spiral_matrix", link: "" },
      { name: "rotate_image", link: "" },
      { name: "word_search", link: "" },
    ],
  },
  {
    name: "string",
    problems: [
      { name: "longest_substring_without_repeating_characters", link: "" },
      { name: "longest_repeating_character_replacement", link: "" },
      { name: "minimum_window_substring", link: "" },
      { name: "valid_anagram", link: "" },
      { name: "group_anagrams", link: "" },
      { name: "valid_parentheses", link: "" },
      { name: "valid_palindrome", link: "" },
      { name: "longest_palindromic_substring", link: "" },
      { name: "palindromic_substrings", link: "" },
    ],
  },
  {
    name: "tree",
    problems: [
      { name: "maximum_depth_of_binary_tree", link: "" },
      { name: "same_tree", link: "" },
      { name: "invert_flip_binary_tree", link: "" },
      { name: "binary_tree_maximum_path_sum", link: "" },
      { name: "binary_tree_level_order_traversal", link: "" },
      { name: "serialize and deserialize binary tree", link: "" },
      { name: "subtree of another tree", link: "" },
      {
        name: "construct_binary_tree_from_preorder_and_inorder_traversal",
        link: "",
      },
      { name: "validate_binary_search_tree", link: "" },
      { name: "kth_smallest_element_in_bst", link: "" },
      { name: "lowest_common_ancestor_of_bst", link: "" },
      { name: "implement_trie", link: "" },
      { name: "add_and_search_word", link: "" },
      { name: "word_search_two", link: "" },
    ],
  },
  {
    name: "heap",
    problems: [
      {
        name: "merge_k_sorted_lists",
        link: "",
      },
      {
        name: "top_k_frequent_elements",
        link: "",
      },
      {
        name: "find_median_from_data_stream",
        link: "",
      },
    ],
  },
];

function _genProblemFiles() {
  function _genProblemTests() {}
}
