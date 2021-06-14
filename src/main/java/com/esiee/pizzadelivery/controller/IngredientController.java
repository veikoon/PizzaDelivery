package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Ingredient;
import com.esiee.pizzadelivery.service.IngredientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class IngredientController {

        private Logger logger = LoggerFactory.getLogger(IngredientController.class);

        @Autowired
        private IngredientService ingredientService;

        @RequestMapping(value="/ingredient/new", method= RequestMethod.POST)
        public Ingredient newIngredient(@RequestBody Ingredient ingredient) {
            logger.info("newIngredient()");
            return ingredientService.newIngredient(ingredient);
        }

        @RequestMapping(value="/ingredient/all", method= RequestMethod.GET)
        public List<Ingredient> findAll() throws Exception {
            logger.info("findAll()");
            return ingredientService.findAll();
        }
}
